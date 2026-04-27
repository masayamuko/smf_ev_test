import { Card } from "@/components/ui/card";
import { Hammer } from "lucide-react";

export default function UnderConstruction() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <Card className="max-w-md w-full p-8 text-center space-y-6">
                <div className="mx-auto w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                    <Hammer className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">現在製作中です</h1>
                <p className="text-gray-600">
                    こちらのページは現在準備中です。<br />
                    公開までもうしばらくお待ちください。
                </p>
                <div className="pt-4">
                    <a href="/" className="text-indigo-600 hover:text-indigo-800 font-semibold underline underline-offset-4">
                        トップページへ戻る
                    </a>
                </div>
            </Card>
        </div>
    );
}
