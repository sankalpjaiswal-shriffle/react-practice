import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it, vi, beforeEach } from "vitest";
import ProductList from "../components/product/ProductList";
import { paginationReducer } from "../reducers/paginationSlice";
import * as productHook from "../hooks/useProduct";
import { a } from "vitest/dist/chunks/suite.d.BJWk38HB";

const mockProducts = [
  {
    id: 1,
    title: "iPhone 17",
    description: "Latest Apple smartphone",
    price: 999,
    category: "smartphones",
    images: [
      "https://i3-prod-assets.indiaistore.com/files/uploads/products/pdp/iphone-17-lavender/pdp_1757575287_7879.png",
    ],
  },
  {
    id: 2,
    title: "Samsung Galaxy S25",
    description: "Android smartphone",
    price: 799,
    category: "smartphones",
    images: [
      "https://www.91-img.com/pictures/152738-v6-samsung-galaxy-s25-mobile-phone-hres-25.jpg",
    ],
  },
  {
    id: 3,
    title: "Google Pixel 10",
    description: "Google's flagship phone",
    price: 699,
    category: "smartphones",
    images: [
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/318397_0_mZAYq7-9W0.png",
    ],
  },
  {
    id: 4,
    title: "OnePlus 15",
    description: "High-performance smartphone",
    price: 899,
    category: "smartphones",
    images: [
      "https://image01-in.oneplus.net/media/202511/06/f96761005541e8715f92bda23561aa89.png",
    ],
  },
];

const createMockStore = () => {
  return configureStore({
    reducer: {
      pagination: paginationReducer,
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

const renderWithProviders = (component: React.ReactElement) => {
  const store = createMockStore();
  return render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{component}</BrowserRouter>
      </QueryClientProvider>
    </Provider>
  );
};

describe("ProductList Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Render loader when data is loading", () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("Render error component when API fails", () => {
    const mockError = new Error("Failed to fetch products");
    vi.spyOn(productHook, "default").mockReturnValue({
      data: undefined,
      isLoading: true,
      error: mockError,
    } as any);

    renderWithProviders(<ProductList />);
    expect(screen.getByTestId("ErrorOutlineIcon")).toBeInTheDocument();
    expect(screen.getByText(/Failed to fetch/i)).toBeInTheDocument();
  });

  it("Render products successfully", async () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);

    await waitFor(() => {
      expect(screen.getByText("iPhone 17")).toBeInTheDocument();
      expect(screen.getByText("Samsung Galaxy S25")).toBeInTheDocument();
    });
  });

  it("Display only 3 products per page", () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);

    const productCards = screen.getAllByRole("heading", { level: 2 });
    expect(productCards).toHaveLength(3);
  });

  it("Render search bar", () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("Filter products based on search input", async () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "iPhone 17" } });

    await waitFor(() => {
      expect(screen.getByText("iPhone 17")).toBeInTheDocument();
      expect(screen.queryByText("Samsung Galaxy S25")).not.toBeInTheDocument();
    });
  });

  it("Hide pagination when searching", async () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);

    const pagination = screen.getByRole("navigation");
    expect(pagination).toBeInTheDocument();

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "iPhone" } });

    await waitFor(() => {
      expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });
  });

  it("Show all products when search is cleared", async () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);

    const searchInput = screen.getByRole("textbox");

    fireEvent.change(searchInput, { target: { value: "iPhone" } });
    await waitFor(() => {
      expect(screen.queryByText("Samsung Galaxy S25")).not.toBeInTheDocument();
    });

    fireEvent.change(searchInput, { target: { value: "" } });
    await waitFor(() => {
      expect(screen.getByText("Samsung Galaxy S25")).toBeInTheDocument();
    });
  });

  it("Handle pagination correctly", () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);

    const pageBtn = screen.getAllByRole("button");
    const pageBtn2 = pageBtn.find((btn) => btn.textContent === "2");

    if (pageBtn2) {
      fireEvent.click(pageBtn2);
      expect(screen.getByText("OnePlus 15")).toBeInTheDocument();
    }
  });

  it("Render correct pagination count", () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);

    const pageBtn2 = screen.getByText("2");
    expect(pageBtn2).toBeInTheDocument();
  });

  it("Show 'No Product Found' when no products match search", async () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "Vivo" } });

    await waitFor(() => {
      expect(screen.getByText("No Product Found!")).toBeInTheDocument();
    });
  });

  it("Handle search with multiple spaces", async () => {
    vi.spyOn(productHook, "default").mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    } as any);

    renderWithProviders(<ProductList />);

    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "  iPhone  " } });

    await waitFor(() => {
      expect(screen.getByText("iPhone 17")).toBeInTheDocument();
    });
  });
});
