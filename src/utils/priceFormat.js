export default function priceFormat (price) {
    let priceStr = price + "";
    
    return priceStr
      .split(/(?=(?:\d{3})+(?!\d))/)
      .join(" ");
  
  }