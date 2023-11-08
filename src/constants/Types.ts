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