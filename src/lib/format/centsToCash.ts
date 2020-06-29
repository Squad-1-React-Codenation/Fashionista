function addDots(value: string): string {
  return value.split("").reduceRight((dotted, char, index) => {
    const reverseIndex = value.length - index - 1;
    if (index === value.length - 1 || reverseIndex % 3) {
      return char + dotted;
    }
    return char + "." + dotted;
  }, "");
}

export default function centsToCash(cents: number): string {
  const centsString = cents.toString();

  const centsValue = centsString.slice(centsString.length - 2).padStart(2, "0");
  const cashValue = centsString.slice(0, centsString.length - 2) || "0";

  return `R$ ${addDots(cashValue)},${centsValue}`;
}
