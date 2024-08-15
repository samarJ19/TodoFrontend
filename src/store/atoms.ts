import { atom } from "recoil";

export const reloadState = atom({
    key: 'reload',
    default: false,
    });
export const getidState = atom({
        key: 'todoid',
        default: "0",
        });