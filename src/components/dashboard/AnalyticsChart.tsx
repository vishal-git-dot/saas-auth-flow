import { useState } from 'react'
import { motion } from 'framer-motion'
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { chartData } from '@/lib/mockData'

type MetricKey = 'value' | 'projects'

const metricConfig: Record<MetricKey, { label: string; color: string; prefix?: string }> = {
  value: { label: 'Revenue', color: '#7C5CFF', prefix: '$' },
  projects: { label: 'Active projects', color: '#45E8D1' },
}

interface ChartTooltipProps {
  active?: boolean
  payload?: { value?: number }[]
  label?: string
  metric: MetricKey
}

function ChartTooltip({ active, payload, label, metric }: ChartTooltipProps) {
  if (!active || !payload?.length) return null
  const value = payload[0]?.value

  return (
    <div className="glass-panel rounded-xl px-3.5 py-2.5 text-xs shadow-glass-sm">
      <p className="text-muted-foreground">{label}</p>
      <p className="mt-0.5 font-display text-sm font-semibold text-foreground">
        {metricConfig[metric].prefix ?? ''}
        {value?.toLocaleString()}
      </p>
    </div>
  )
}

export function AnalyticsChart() {
  const [metric, setMetric] = useState<MetricKey>('value')
  const color = metricConfig[metric].color

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <div>
            <CardTitle>Performance overview</CardTitle>
            <CardDescription>Last 7 months, updated hourly</CardDescription>
          </div>
          <Tabs value={metric} onValueChange={(v) => setMetric(v as MetricKey)}>
            <TabsList>
              <TabsTrigger value="value">Revenue</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardHeader>
        <CardContent className="pl-2 pr-4">
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.45} />
                    <stop offset="95%" stopColor={color} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="4 8" stroke="rgba(148,150,166,0.15)" vertical={false} />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9297AC', fontSize: 12 }}
                  dy={8}
                />
                <Tooltip content={<ChartTooltip metric={metric} />} cursor={{ stroke: color, strokeOpacity: 0.3 }} />
                <Area
                  type="monotone"
                  dataKey={metric}
                  stroke={color}
                  strokeWidth={2.5}
                  fill="url(#chartFill)"
                  animationDuration={900}
                  activeDot={{ r: 5, strokeWidth: 2, stroke: '#0A0B12' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
