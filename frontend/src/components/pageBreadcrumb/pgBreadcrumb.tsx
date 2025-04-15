import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  
  const BreadcrumbWithCustomSeparator: React.FC<{ currentPage: string }> = ({ currentPage }) => {
    return (
      <Breadcrumb className="text-gray-300">
        <BreadcrumbList >
          <BreadcrumbItem>
            <BreadcrumbLink href="/diseasecard">Services</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="flex items-center w-4 h-4" />
          <BreadcrumbItem>
            <BreadcrumbPage>{currentPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    )
  }
  export default BreadcrumbWithCustomSeparator
  