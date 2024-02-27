export const searchProducts = (query, setSearchTxt, products) => {
    const searchTerm = query?.toLowerCase().trim();
    setSearchTxt(searchTerm)
    return products.filter(product =>
        product?.title.toLowerCase().includes(searchTerm)
    );
};