export type StayInfoStatus =
  | 'active'
  | 'inactive'
  | 'incoming'
  | 'requested'
  | 'rejected'
  | 'cancelled'
  | 'cancel-requested';

export type StayInfoData = {
  id: number;
  propertyName: string;
  status: StayInfoStatus;
  arriveDate: string;
  departDate: string;
  comment?: string;
};
