type Enumerate<
   N extends number,
   Acc extends number[] = []
> = Acc["length"] extends N
   ? Acc[number]
   : Enumerate<N, [...Acc, Acc["length"]]>;

export type Range<F extends number, T extends number> = Exclude<
   Enumerate<T>,
   Enumerate<F>
>;

export type Year = `${Range<0, 10>}${Range<0, 10>}${Range<0, 10>}${Range<
   0,
   10
>}`;
export type Month = `${`0${Range<1, 10>}` | Range<10, 13>}`;
export type Day = `${`0${Range<1, 10>}` | Range<10, 32>}`;
export type Hours = `${`0${Range<0, 10>}` | Range<10, 25>}`;
export type Minutes = `${`0${Range<0, 10>}` | Range<10, 60>}`;
export type Seconds = Minutes;
export type Milliseconds = `${`0${Range<0, 10>}` | Range<10, 100>}`;
