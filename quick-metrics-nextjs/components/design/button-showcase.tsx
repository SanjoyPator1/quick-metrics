import React from "react";
import { Button } from "../ui/button";
import { Copy, Plus } from "lucide-react";
import { Separator } from "../ui/separator";
import { toast } from "sonner";

const ButtonShowcase = () => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast("Copied successfully", {
      description: "Item has been copied successfully",
    });
  };

  return (
    <div className="grid gap-6">
      <div>
        <h3 className="text-lg font-medium mb-2">Button Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2 items-center">
            <Button>Default</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">
                variant="default"
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard("<Button>Default</Button>")}
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="secondary">Secondary</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">
                variant="secondary"
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard(
                    '<Button variant="secondary">Secondary</Button>'
                  )
                }
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="outline">Outline</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">
                variant="outline"
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard('<Button variant="outline">Outline</Button>')
                }
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="ghost">Ghost</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">
                variant="ghost"
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard('<Button variant="ghost">Ghost</Button>')
                }
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium mb-2">Button Sizes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 items-center">
            <Button size="lg">Large</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">size="lg"</code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard('<Button size="lg">Large</Button>')
                }
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button>Default</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">
                size="default"
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => copyToClipboard("<Button>Default</Button>")}
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button size="sm">Small</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">size="sm"</code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard('<Button size="sm">Small</Button>')
                }
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium mb-2">Special Button Types</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 items-center">
            <Button variant="destructive">Destructive</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">
                variant="destructive"
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard(
                    '<Button variant="destructive">Destructive</Button>'
                  )
                }
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="link">Link Button</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">
                variant="link"
              </code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard('<Button variant="link">Link Button</Button>')
                }
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button size="icon">
              <Plus className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">size="icon"</code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard(
                    '<Button size="icon"><Plus className="h-4 w-4" /></Button>'
                  )
                }
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="text-lg font-medium mb-2">Button States</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-2 items-center">
            <Button disabled>Disabled</Button>
            <div className="flex items-center gap-1 mt-1">
              <code className="text-xs bg-muted p-1 rounded">disabled</code>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  copyToClipboard("<Button disabled>Disabled</Button>")
                }
                className="h-6 w-6"
              >
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button className="w-24" disabled>
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Loading
            </Button>
            <code className="text-xs mt-1 bg-muted p-1 rounded">
              Loading state
            </code>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="outline" className="border-dashed">
              <Plus className="mr-2 h-4 w-4" /> Add New
            </Button>
            <code className="text-xs mt-1 bg-muted p-1 rounded">With icon</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonShowcase;
