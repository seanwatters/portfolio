import fs from 'fs';
import path from 'path';

export const getStaticIdsByPath = (dirPath: string): string[] => {
  const dir = path.join(process.cwd(), dirPath);
  return fs.readdirSync(dir).map((filename: string) => (filename.replace(/\.json$/, '')));
};

export const getStaticContentByIdAndPath = (id: string, dirPath: string): any => {
  const dir = path.join(process.cwd(), dirPath);
  const filePath = path.join(dir, `${id}.json`);

  const rawContent = fs.readFileSync(filePath);
  return JSON.parse(rawContent.toString());
};
