import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">页面未找到</h2>
        <p className="text-gray-600 mb-8">
          抱歉，您访问的页面不存在或已被移除。请返回首页或尝试其他链接。
        </p>
        <Link href="/" passHref>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            返回首页
          </Button>
        </Link>
      </div>
    </div>
  );
}