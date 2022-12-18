declare type Enumerate<
   N extends number,
   Acc extends number[] = []
> = Acc["length"] extends N
   ? Acc[number]
   : Enumerate<N, [...Acc, Acc["length"]]>;

declare interface NumericRange<F extends number, T extends number>
   extends Exclude<Enumerate<T>, Enumerate<F>> {}

// declare type Year = `${NumericRange<0, 10>}${NumericRange<0, 10>}${NumericRange<
//    0,
//    10
// >}${NumericRange<0, 10>}`;
// export type Month = `${`0${NumericRange<1, 10>}` | NumericRange<10, 13>}`;
// export type Day = `${`0${NumericRange<1, 10>}` | NumericRange<10, 32>}`;
// export type Hours = `${`0${NumericRange<0, 10>}` | NumericRange<10, 25>}`;
// export type Minutes = `${`0${NumericRange<0, 10>}` | NumericRange<10, 60>}`;
// export type Seconds = Minutes;
// export type Milliseconds = `${
//    | `0${NumericRange<0, 10>}`
//    | NumericRange<10, 100>}`;
