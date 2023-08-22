import { ReactNode } from 'react';

export interface ModalProps {
  bindings: {
    open: boolean;
    onClose: () => void;
  };
}

export type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export interface AccessCardProps {
  title: string;
  user: {
    name: string;
    email?: string;
  };
  type: string;
  info?: string;
}

export interface CardProps {
  title: string;
  children: ReactNode;
  action?: ReactNode;
}

export interface IconRuleProps {
  children: ReactNode;
}

export interface PropertyCardProps {
  id: string;
  propertyName: string;
  propertyImage?: string;
  userName: string;
  userAvater?: string;
}

export interface RequestCardProps {
  title: string;
  children?: ReactNode;
  action?: ReactNode;
  user: string;
  email: string;
}

export interface SidebarInfoCardProps {
  className?: string;
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  action?: ReactNode;
  pageName?: string;
  gradient?: boolean;
}
export interface SocialCArdProps {
  type?: string;
}

export interface DashboardPageTitleProps {
  title: string;
  info?: string;
}

export interface PopoverCardProps {
  children: ReactNode;
  setIsPopoverOpen?: any;
  cardPlace?:number;
}

export interface AmenitiesProps {
  data: {
    custom?: string[];
    default: string[];
  };
}

export interface GuestInfoCardProps {
  children: ReactNode;
}

export interface GeneralRulesProps {
  data: {
    arrive: string;
    depart: string;
    pets: boolean;
    kids: boolean;
    parties: boolean;
    smoking: boolean;
  };
}

export interface KidAmenitiesProps {
  data: string[];
}

export interface ImageSettingsProps {
  image?: string;
}

export interface RequestHeaders extends RequestInit {
  enableLogger?: boolean;
  headers?:
    | HeadersInit & {
        'x-require-auth'?: 'true' | 'false';
        'x-require-build-token'?: 'true' | 'false';
        'Content-Type'?: 'application/json';
      };
}

export type ButtonType = 'submit' | 'button' | 'reset';

export type Image = {
  img_id: number;
  img_src: string;
  img_alt: string;
};
