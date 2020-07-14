export interface Products {
    products: Array<Product>,


}
export interface Product {
    name: string,
    price: string
}

export interface Students {
    students: Array<Student>
}

export interface Student {
    name:string,
    class: string,
    section: string,
    sub1:string,
    sub2:string,
    sub3:string
}

export interface timerInfo {
    clicksTimeStamp :  Array<string>
    startClicks:  number,
    pauseClicks: number,
    clicksTimerValues: Array<string>,
    timerValue: number

}