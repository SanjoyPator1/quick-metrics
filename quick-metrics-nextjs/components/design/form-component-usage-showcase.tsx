import React from "react";

const FormComponentUsageShowcase = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-medium mb-2">Basic Input:</h3>
        <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
          {`<div className="space-y-2">
<Label htmlFor="email">Email</Label>
<Input id="email" placeholder="Enter email" />
</div>`}
        </pre>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Select Component:</h3>
        <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
          {`<Select>
<SelectTrigger>
<SelectValue placeholder="Select" />
</SelectTrigger>
<SelectContent>
<SelectItem value="option1">Option 1</SelectItem>
<SelectItem value="option2">Option 2</SelectItem>
</SelectContent>
</Select>`}
        </pre>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Checkbox:</h3>
        <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
          {`<div className="flex items-center space-x-2">
<Checkbox id="terms" />
<Label htmlFor="terms">Accept terms</Label>
</div>`}
        </pre>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Switch:</h3>
        <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
          {`<div className="flex items-center space-x-2">
<Switch id="airplane-mode" />
<Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
        </pre>
      </div>
    </div>
  );
};

export default FormComponentUsageShowcase;
