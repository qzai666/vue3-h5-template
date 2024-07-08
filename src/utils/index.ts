//获取图片
export const getSrcImage = (name: string): string => {
  return new URL(`../assets/image/${name}`, import.meta.url).href
}
