import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, useParams, useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it, vi, beforeEach } from "vitest";
import ProductDetails from "../components/product/ProductDetails";
import { cartReducer } from "../reducers/cartSlice";
import * as productDetailsHook from "../hooks/useProductDetails";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useParams: vi.fn(),
    useNavigate: vi.fn(),
  };
});

const mockProduct = {
  id: 1,
  title: "iPhone 17",
  description: "Latest Apple smartphone",
  price: 999,
  brand: "Apple",
  images: [
    "https://i3-prod-assets.indiaistore.com/files/uploads/products/pdp/iphone-17-lavender/pdp_1757575287_7879.png",
  ],
};

const createMockStore = (initialCart = []) => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
    preloadedState: {
      cart: {
        cart: initialCart,
      },
    },
  });
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderWithProviders = (component: React.ReactElement, store?: any) => {
  const mockStore = store || createMockStore();
  return render(
    <Provider store={mockStore}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{component}</BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

describe("ProductDetails Component", () => {
  const useNavigateMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useParams as any).mockReturnValue({ productID: "1" });
    (useNavigate as any).mockReturnValue(useNavigateMock);
  });

  it("Render loader when product is loading", () => {
    vi.spyOn(productDetailsHook, "default").mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as any);

    renderWithProviders(<ProductDetails />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("Render error component when API fails", () => {
    const mockError = new Error("Failed to fetch product");
    vi.spyOn(productDetailsHook, "default").mockReturnValue({
      data: undefined,
      isLoading: false,
      error: mockError,
    } as any);

    renderWithProviders(<ProductDetails />);
    expect(screen.getByTestId("ErrorOutlineIcon")).toBeInTheDocument();
    expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
  });

  it("Render product details successfully", () => {
    vi.spyOn(productDetailsHook, "default").mockReturnValue({
      data: mockProduct,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductDetails />);

    expect(screen.getByText("iPhone 17")).toBeInTheDocument();
    expect(screen.getByText("Latest Apple smartphone")).toBeInTheDocument();
    expect(screen.getByText("$999")).toBeInTheDocument();
    expect(screen.getByText("Brand: Apple")).toBeInTheDocument();
  });

  it("Render product image with correct attributes", () => {
    vi.spyOn(productDetailsHook, "default").mockReturnValue({
      data: mockProduct,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductDetails />);

    const image = screen.getByAltText("iPhone 17");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProduct.images[0]);
  });

  it("Show 'Add to cart' button when item is not in cart", () => {
    vi.spyOn(productDetailsHook, "default").mockReturnValue({
      data: mockProduct,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductDetails />);

    expect(screen.getByText("Add to cart")).toBeInTheDocument();
  });

  it("Add item to cart when 'Add to cart' button is clicked", () => {
    vi.spyOn(productDetailsHook, "default").mockReturnValue({
      data: mockProduct,
      isLoading: false,
      error: null,
    } as any);

    const store = createMockStore();
    renderWithProviders(<ProductDetails />, store);

    const addToCartButton = screen.getByText("Add to cart");
    fireEvent.click(addToCartButton);

    const state = store.getState();
    expect(state.cart.cart).toHaveLength(1);
    expect(state.cart.cart[0].id).toBe(1);
  });

  it("Show 'Go to Cart' button when item is already in cart", () => {
    vi.spyOn(productDetailsHook, "default").mockReturnValue({
      data: mockProduct,
      isLoading: false,
      error: null,
    } as any);

    const store = createMockStore([mockProduct] as any);

    renderWithProviders(<ProductDetails />, store);

    expect(screen.getByText("Go to Cart")).toBeInTheDocument();
    expect(screen.queryByText("Add to cart")).not.toBeInTheDocument();
  });

  it("Navigate to cart when 'Go to Cart' button is clicked", () => {
    vi.spyOn(productDetailsHook, "default").mockReturnValue({
      data: mockProduct,
      isLoading: false,
      error: null,
    } as any);

    const store = createMockStore([mockProduct] as any);

    renderWithProviders(<ProductDetails />, store);

    const goToCartButton = screen.getByText("Go to Cart");
    fireEvent.click(goToCartButton);

    expect(useNavigateMock).toHaveBeenCalledWith("/home/cart");
  });

  it("Use correct productID from URL params", () => {
    const mockUseProductDetails = vi.spyOn(productDetailsHook, "default");
    mockUseProductDetails.mockReturnValue({
      data: mockProduct,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductDetails />);

    expect(mockUseProductDetails).toHaveBeenCalledWith("1");
  });
});
