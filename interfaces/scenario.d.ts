export interface Scenario {
  companyName: string;
  role: string;
  location: string;
  startDate: string | Date;
  endDate?: string | Date;
  isCurrent?: boolean;
  descriptions?: {
    description: string;
  }[];
}