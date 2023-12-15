export const dateFormatToYMD = (date: string) => {
  const dateObj = new Date(date);
  const [Y, M, D] = [dateObj.getFullYear(), dateObj.getMonth() + 1, dateObj.getDate()];
  
  return `${Y}년 ${M}월 ${D}일`
}

export const getTextOfBetweenTag = (text: string) => {
  const result = text.match(/(?<=<\w+>).+(?=<\/\w+>)/g) || [];
  return result;
}