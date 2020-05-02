/// <reference types="react-scripts" />
import { SwitchProps, RouteProps } from 'react-router';

declare module 'react-router-modal-gallery' {
  interface ModalSwitchRenderProps {
    open: boolean;
    redirectToBack: VoidFunction;
  }

  interface ModalSwitchProps extends SwitchProps {
    renderModal: (props: ModalSwitchRenderProps) => JSX.Element;
  }

  export function ModalSwitch(props: any): JSX.Element;

  export interface ModalRouteProps extends RouteProps {
    defaultParentPath: string;
  }
  export function ModalRoute(props: ModalRouteProps): JSX.Element;

  export function ModalLink(props: any): JSX.Element;
}