import axios from "axios";
import jsCookie from "js-cookie";

export const APIClient = axios.create({
  baseURL: "https://itcity.tectuz.com/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorizatoin: `Bearer ${jsCookie.get("token")}`,
  },
  // withCredentials: true,
});

export const  imgURL="https://itcity.tectuz.com/uploads/home-slider/"
export const thumbimgURL="https://itcity.tectuz.com/uploads/product/thumb_images/"
const homeimageUrl="https://itcity.tectuz.com//uploads/home-slider/";