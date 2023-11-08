export enum SelectedPage {
    Home = "home",
    Benifits = "benifits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}

export interface BenifitsData{
    icon:JSX.Element,
    description:string,
    title:string
}

export interface OurClassesType{
    name: string;
    description: string;
    image: string;
}