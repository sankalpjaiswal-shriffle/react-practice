import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import ProductCard from "../components/product/ProductCard";
import type { Product } from "../types/product";

const mockProducts: Product[] = [
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
];

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("ProductCard Component", () => {
  it("Render 'No Product Found' message when productList is empty", () => {
    renderWithRouter(<ProductCard productList={[]} />);
    const noProductMessage = screen.getByText("No Product Found!");
    expect(noProductMessage).toBeInTheDocument();
  });

  it("Render 'No Product Found' when productList is undefined", () => {
    renderWithRouter(<ProductCard />);
    expect(screen.getByText("No Product Found!")).toBeInTheDocument();
  });

  it("Render all products from the list", () => {
    renderWithRouter(<ProductCard productList={mockProducts} />);
    expect(screen.getByText("iPhone 17")).toBeInTheDocument();
    expect(screen.getByText("Samsung Galaxy S25")).toBeInTheDocument();
  });

  it("Render product details correctly", () => {
    renderWithRouter(<ProductCard productList={[mockProducts[0]]} />);

    expect(screen.getByText("iPhone 17")).toBeInTheDocument();
    expect(screen.getByText("Latest Apple smartphone")).toBeInTheDocument();
    expect(screen.getByText("Price: $999")).toBeInTheDocument();
    expect(screen.getByText("Category : smartphones")).toBeInTheDocument();
  });

  it("Render product images with correct alt text", () => {
    renderWithRouter(<ProductCard productList={[mockProducts[0]]} />);

    const image = screen.getByAltText("iPhone 17");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProducts[0].images[0]);
  });

  it("Render products with missing image", () => {
    renderWithRouter(
      <ProductCard productList={[{ ...mockProducts[0], images: [] }]} />
    );

    const image = screen.getByRole("img", { name: /iphone 17/i });
    expect(image).toBeInTheDocument();
    expect(image).not.toHaveAttribute("src");
  });

  it("Render correct link for each product", () => {
    renderWithRouter(<ProductCard productList={[mockProducts[0]]} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/1");
  });
});
