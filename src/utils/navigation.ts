import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params: unknown) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function push(name: string, params: unknown) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      StackActions.push(name, {
        params,
      }),
    );
  }
}

export function goBack() {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

export function pop(count: number) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}
