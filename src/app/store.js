import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../feature/header/headerSlice";
// import capabiliteRducer from "../feature/Capabilities/CapabilitieSlice"
// import imgSliderReducer from "../feature/imgSlider/imgSliderSlice"

export const store = configureStore({
    reducer: {
        header: headerReducer,
        // capabilities:capabiliteRducer,
    
    }
});