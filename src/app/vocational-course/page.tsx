// Vocational Course Hub
// Redirects to first available country page

import { redirect } from 'next/navigation'

export default function VocationalCourseHub() {
  redirect('/vocational-course/australia')
}