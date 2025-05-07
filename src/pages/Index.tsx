
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import SystemInfo from "@/components/SystemInfo";
import CockpitHeader from "@/components/CockpitHeader";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setLoading(true);
    setRefreshKey(prev => prev + 1);
    setTimeout(() => setLoading(false), 500);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <CockpitHeader />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">Hello Ubuntu</h1>
          <Button 
            onClick={handleRefresh} 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2"
            disabled={loading}
          >
            <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Welcome to Cockpit Plugin</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                This is a simple Hello World plugin for Cockpit Project running on Ubuntu. 
                Below you can see basic system information retrieved through the Cockpit bridge.
              </p>
            </CardContent>
          </Card>

          <SystemInfo key={refreshKey} />
        </div>
      </main>
      
      <footer className="py-4 px-6 bg-white border-t border-gray-200">
        <p className="text-sm text-gray-500 text-center">
          Cockpit Hello World Plugin • <a href="https://cockpit-project.org" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">cockpit-project.org</a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
