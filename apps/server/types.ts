export interface ProductID {
  productID: string;
}

export interface TagID {
  tagID: string;
}

export interface ProductTypeID {
  productTypeID: string;
}

export interface VendorID {
  vendorID: string;
}

export interface ProductRequest {
  title: string;
  description: string;
  status: 'ACTIVE' | 'DRAFT' | 'ARCHIVE';
  price: number;
  cost: number;
  vendor: string;
  productType: string;
  barcode: string;
  stockKeepingUnit: string;
  quantity: number;
  tags: string[];
}

export interface TagRequest {
  tag: string;
}

export interface VendorRequest {
  vendor: string;
}

export interface ProductTypeRequest {
  productType: string;
}

export interface Error {
  error: string;
  message: string;
  statusCode: string;
}

export interface Params {
  [key: string]: string;
}
