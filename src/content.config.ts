import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const mahasiswaCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/mahasiswa' }),
  
  // Perhatikan bagian 'avatar' di bawah ini
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.string().default('Mahasiswa Sistem Informasi'),
    
    // UBAH BAGIAN INI: Hapus .refine() agar menerima semua ukuran gambar
    avatar: image().optional(), 
    
    socials: z.object({
      github: z.string().url().optional(),
      linkedin: z.string().url().optional(),
      instagram: z.string().url().optional(),
    }).optional(),
    isActive: z.boolean().default(true),
  }),
});

export const collections = {
  'mahasiswa': mahasiswaCollection,
};