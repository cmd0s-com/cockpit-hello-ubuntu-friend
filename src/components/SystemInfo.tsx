
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface SystemData {
  hostname: string;
  os_release: {
    NAME: string;
    VERSION: string;
    ID: string;
    PRETTY_NAME: string;
  };
  uptime: number;
}

const mockSystemData: SystemData = {
  hostname: "ubuntu-server",
  os_release: {
    NAME: "Ubuntu",
    VERSION: "24.04 LTS",
    ID: "ubuntu",
    PRETTY_NAME: "Ubuntu 24.04 LTS (Noble Numbat)"
  },
  uptime: 345600 // 4 days in seconds
};

const SystemInfo = () => {
  const [systemData, setSystemData] = useState<SystemData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real Cockpit plugin, this would be:
    // const cockpit = window.cockpit;
    // cockpit.spawn(["hostname"]).then(hostname => {...})
    // cockpit.file("/etc/os-release").read().then(content => {...})
    // cockpit.spawn(["cat", "/proc/uptime"]).then(uptime => {...})
    
    // For demonstration, we'll simulate a network request
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 700));
        setSystemData(mockSystemData);
      } catch (error) {
        console.error("Failed to fetch system data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Format uptime from seconds to days, hours, minutes
  const formatUptime = (seconds: number): string => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor(((seconds % 86400) % 3600) / 60);
    
    return `${days} days, ${hours} hours, ${minutes} minutes`;
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">System Information</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-6 w-2/3" />
          </div>
        ) : systemData ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Hostname</h3>
              <p className="text-lg font-medium">{systemData.hostname}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Operating System</h3>
              <p className="text-lg font-medium">{systemData.os_release.PRETTY_NAME}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">System Uptime</h3>
              <p className="text-lg font-medium">{formatUptime(systemData.uptime)}</p>
            </div>
          </div>
        ) : (
          <p className="text-red-500">Failed to load system information</p>
        )}
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Note: In an actual Cockpit plugin, this information would be retrieved from the system using the Cockpit API.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemInfo;
