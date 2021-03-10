const parseRevenue = (value) => {
    const revenue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation:'compact',                                        
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);

    return revenue;
}

export default parseRevenue;