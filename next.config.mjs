/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;