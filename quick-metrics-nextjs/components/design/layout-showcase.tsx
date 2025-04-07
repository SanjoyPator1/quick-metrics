import React from "react";
import { Separator } from "../ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LayoutShowcase = () => {
  return (
    <div className="space-y-8">
      {/* Grid Layout */}
      <div>
        <h3 className="text-lg font-medium mb-4">Grid Layout</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted p-4 rounded-lg flex items-center justify-center">
            Column 1
          </div>
          <div className="bg-muted p-4 rounded-lg flex items-center justify-center">
            Column 2
          </div>
          <div className="bg-muted p-4 rounded-lg flex items-center justify-center">
            Column 3
          </div>
        </div>
        <div className="mt-2">
          <code className="text-xs bg-muted/50 p-1 rounded">
            grid grid-cols-1 md:grid-cols-3 gap-4
          </code>
        </div>
      </div>

      {/* Separator */}
      <div>
        <h3 className="text-lg font-medium mb-4">Separator</h3>
        <div className="space-y-4">
          <p>Content above the separator</p>
          <Separator />
          <p>Content below the separator</p>
        </div>
        <div className="mt-2">
          <code className="text-xs bg-muted/50 p-1 rounded">
            &lt;Separator /&gt;
          </code>
        </div>
      </div>

      {/* Tabs */}
      <div>
        <h3 className="text-lg font-medium mb-4">Tabs</h3>
        <Tabs defaultValue="tab1" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="p-4 border rounded-lg mt-2">
            Tab 1 content
          </TabsContent>
          <TabsContent value="tab2" className="p-4 border rounded-lg mt-2">
            Tab 2 content
          </TabsContent>
          <TabsContent value="tab3" className="p-4 border rounded-lg mt-2">
            Tab 3 content
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LayoutShowcase;
