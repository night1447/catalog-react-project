declare module "*.module.css";
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.gif";
declare module "*.png";
declare module "*.svg";
declare module "*.jpg";