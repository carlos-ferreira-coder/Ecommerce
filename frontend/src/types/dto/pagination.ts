export interface PaginationDTO {
  page: number;
  limitItens: number;
  totalItens: number;
  totalPages: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}
