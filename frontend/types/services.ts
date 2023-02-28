export type ArrayService = Array<Service>

export interface Service {
  id: number
  model: string
  status: string
  inclusionDate: string
  piecePrice: string
  servicePrice: string
  profit: string
  deliveredDate: string
}
