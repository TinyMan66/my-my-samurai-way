import React, {ComponentType} from 'react';
import {Preloader} from "../Components/common/Preloader/Preloader";

export const withSuspense = (Component: ComponentType) => {
   return () => {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component/>
            </React.Suspense>
        );
    }
};