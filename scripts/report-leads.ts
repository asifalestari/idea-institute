import { prisma } from '../src/lib/prisma'

async function generateLeadReport() {
    try {
        const leads = await prisma.lead.findMany()
        const totalLeads = leads.length

        console.log(`\n==================================================`)
        console.log(`          REKAP DATA LEADS & KELENGKAPAN FIELD     `)
        console.log(`==================================================`)
        console.log(`Total Data Masuk: ${totalLeads} baris\n`)

        if (totalLeads === 0) {
            console.log('Belum ada data masuk di database.')
            return
        }

        // Ambil daftar nama kolom dari data pertama
        const sampleKeys = Object.keys(leads[0])

        const fieldStats = sampleKeys.map((key) => {
            let filledCount = 0
            let emptyCount = 0

            leads.forEach((lead: any) => {
                const val = lead[key]
                if (val !== null && val !== undefined && val !== '') {
                    filledCount++
                } else {
                    emptyCount++
                }
            })

            const emptyPercentage = ((emptyCount / totalLeads) * 100).toFixed(1) + '%'

            return {
                'Nama Kolom': key,
                'Terisi': filledCount,
                'Kosong': emptyCount,
                'Persentase Kosong': emptyPercentage,
            }
        })

        // Cetak tabel ringkasan kelengkapan kolom
        console.table(fieldStats)

        // Cetak 5 data terbaru sebagai sampel detail
        console.log(`\n--------------------------------------------------`)
        console.log(`          SAMPEL 5 DATA TERBARU                   `)
        console.log(`--------------------------------------------------`)
        console.table(
            leads.slice(-5).map((l: any) => ({
                ID: l.id,
                Nama: l.fullName || '❌ [KOSONG]',
                Email: l.email || '❌ [KOSONG]',
                WhatsApp: l.phoneWhatsapp || '❌ [KOSONG]',
                Program: l.programInterest || '❌ [KOSONG]',
                UTM_Source: l.utmSource || '❌ [KOSONG]',
            }))
        )
    } catch (error) {
        console.error('Gagal mengambil laporan:', error)
    } finally {
        await prisma.$disconnect()
    }
}

generateLeadReport()