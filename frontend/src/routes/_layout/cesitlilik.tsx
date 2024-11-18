import { Container } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"
import DiversityPage from "../../components/Pages/DiversityPage"  // Import ekledik

const diversitySearchSchema = z.object({
  page: z.number().catch(1),
})

export const Route = createFileRoute("/_layout/cesitlilik")({
  component: DiversityContent,
  validateSearch: (search) => diversitySearchSchema.parse(search),
})

function DiversityContent() {
  return (
    <Container maxW="full">
      <DiversityPage />
    </Container>
  )
}