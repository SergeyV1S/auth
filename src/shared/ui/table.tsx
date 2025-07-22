import { cn } from "@shared/lib";

import { typographyVariants } from "./typography";

const Table = ({ className, ...props }: React.ComponentProps<"table">) => (
  <div data-slot='table-container' className='relative w-full overflow-auto'>
    <table data-slot='table' className={cn("w-full", className)} {...props} />
  </div>
);

const TableHeader = ({ className, ...props }: React.ComponentProps<"thead">) => (
  <thead data-slot='table-header' className={cn("[&_tr]:border-b", className)} {...props} />
);

const TableBody = ({ className, ...props }: React.ComponentProps<"tbody">) => (
  <tbody
    data-slot='table-body'
    className={cn(
      "[&_tr:last-child]:border-0",
      typographyVariants({ variant: "paragraph_14_regular" }),
      className
    )}
    {...props}
  />
);

const TableFooter = ({ className, ...props }: React.ComponentProps<"tfoot">) => (
  <tfoot
    data-slot='table-footer'
    className={cn("bg-muted/50 border-t font-medium [&>tr]:last:border-b-0", className)}
    {...props}
  />
);

const TableRow = ({ className, ...props }: React.ComponentProps<"tr">) => (
  <tr
    data-slot='table-row'
    className={cn(
      "hover:bg-muted/50 data-[state=selected]:bg-muted border-b text-start transition-colors",
      className
    )}
    {...props}
  />
);

const TableHead = ({ className, ...props }: React.ComponentProps<"th">) => (
  <th
    data-slot='table-head'
    className={cn(
      "text-foreground p-5 text-start [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      typographyVariants({ variant: "paragraph_16_medium" }),
      className
    )}
    {...props}
  />
);

const TableCell = ({ className, ...props }: React.ComponentProps<"td">) => (
  <td
    data-slot='table-cell'
    className={cn(
      "px-2 py-5 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
);

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell };
