/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "wfljgodmgqxihpkkctgl.supabase.co",
              pathname: '**',
            },
          ],
    }
};

export default nextConfig;
