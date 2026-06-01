import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Brain, Gauge, Shield, Thermometer, Truck, Activity, Eye } from 'lucide-react';

type Metric = {
  label: string;
  value: number;
  unit?: string;
  color?: 'good' | 'warn' | 'danger';
};

const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n));

function useLiveTelemetry() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setTick((t) => t + 1), 900);
    return () => window.clearInterval(id);
  }, []);

  // Deterministic pseudo-live variation (no backend required)
  const metrics = useMemo<{
    vehicle: Metric[];
    system: Metric[];
    ai: Metric[];
    detectionAccuracy: Metric;
    stats: { label: string; value: string; severity?: 'good' | 'warn' | 'danger' }[];
  }>(() => {
    const baseIncident = 2.4;
    const incidentJitter = (Math.sin(tick / 3) + 1) * 0.8; // 0..1.6-ish
    const incidentRate = clamp(baseIncident + incidentJitter - 0.6, 0.7, 4.8);

    const confidence = clamp(96 + Math.sin(tick / 5) * 1.8, 90, 99.8);
    const throughput = clamp(420 + Math.cos(tick / 4) * 55, 300, 520);
    const latency = clamp(38 + Math.sin(tick / 6) * 10, 22, 60);

    const vehicleQueue = clamp(18 + Math.cos(tick / 2.6) * 6 + Math.sin(tick / 9) * 3, 6, 36);
    const vehiclesDetected = clamp(1240 + tick * 6 + Math.sin(tick / 8) * 18, 0, 999999);

    const temp = clamp(52 + Math.sin(tick / 7) * 4 + 0.5, 44, 60);
    const mem = clamp(62 + Math.cos(tick / 6.5) * 6, 45, 78);
    const cpu = clamp(41 + Math.sin(tick / 4.5) * 8, 28, 70);

    const detectionAccuracyValue = clamp(98.2 + Math.sin(tick / 10) * 0.45, 95, 99.6);

    const vehicleByClass = [
      { label: 'Car', value: clamp(62 + Math.sin(tick / 3.2) * 3, 54, 72) },
      { label: 'Truck', value: clamp(18 + Math.cos(tick / 4.1) * 2.5, 12, 24) },
      { label: 'Motorbike', value: clamp(14 + Math.sin(tick / 2.9) * 2.2, 9, 20) },
      { label: 'Bus', value: clamp(6 + Math.cos(tick / 5.2) * 1.1, 3, 10) },
    ];

    const sum = vehicleByClass.reduce((a, b) => a + b.value, 0);
    // normalized values are computed in the UI (vehicle analytics). Keep telemetry lightweight.
    void sum;

    const incidentSeverity: 'good' | 'warn' | 'danger' = incidentRate > 3.6 ? 'danger' : incidentRate > 2.2 ? 'warn' : 'good';

    return {
      vehicle: [
        { label: 'Vehicles in Queue', value: vehicleQueue, unit: '', color: vehicleQueue > 28 ? 'warn' : 'good' },
        { label: 'Total Detected', value: vehiclesDetected, unit: '', color: 'good' },
        { label: 'Incident Rate', value: incidentRate, unit: '/hr', color: incidentSeverity },
        { label: 'Confidence', value: confidence, unit: '%', color: confidence > 96.5 ? 'good' : confidence > 94.5 ? 'warn' : 'danger' },
      ],
      system: [
        { label: 'Sensor Temperature', value: temp, unit: '°C', color: temp > 57 ? 'warn' : 'good' },
        { label: 'Model Runtime CPU', value: cpu, unit: '%', color: cpu > 62 ? 'warn' : 'good' },
        { label: 'Memory Utilization', value: mem, unit: '%', color: mem > 74 ? 'warn' : 'good' },
      ],
      ai: [
        { label: 'Throughput', value: throughput, unit: 'img/min', color: 'good' },
        { label: 'End-to-End Latency', value: latency, unit: 'ms', color: latency > 48 ? 'warn' : 'good' },
        { label: 'Auto Processing', value: 100, unit: '%', color: 'good' },
      ],
      detectionAccuracy: {
        label: 'Detection Accuracy',
        value: detectionAccuracyValue,
        unit: '%',
        color: detectionAccuracyValue > 98 ? 'good' : detectionAccuracyValue > 96.5 ? 'warn' : 'danger',
      },
      stats: [
        { label: 'Active Cameras', value: '06', severity: 'good' },
        { label: 'Verified Detections', value: `${clamp(82 + Math.sin(tick / 3) * 4, 70, 95).toFixed(0)}%`, severity: 'good' },
        { label: 'Incidents', value: `${clamp(incidentRate, 0, 9).toFixed(1)}/hr`, severity: incidentSeverity },
        { label: 'Alert Mode', value: incidentSeverity === 'danger' ? 'HIGH' : incidentSeverity === 'warn' ? 'ELEVATED' : 'NORMAL', severity: incidentSeverity },
        { label: 'Model Confidence', value: `${confidence.toFixed(1)}%`, severity: confidence > 96.5 ? 'good' : confidence > 94.5 ? 'warn' : 'danger' },
      ],
    };
  }, [tick]);

  return { metrics };
}

const SeverityPill = ({ severity, children }: { severity?: 'good' | 'warn' | 'danger'; children: React.ReactNode }) => {
  const map = {
    good: { bg: 'rgba(76, 175, 80, 0.10)', border: 'rgba(76, 175, 80, 0.28)', text: '#4caf50' },
    warn: { bg: 'rgba(255, 179, 71, 0.10)', border: 'rgba(255, 179, 71, 0.35)', text: '#ffb347' },
    danger: { bg: 'rgba(255, 95, 87, 0.10)', border: 'rgba(255, 95, 87, 0.35)', text: '#ff5f57' },
  } as const;

  const s = severity ? map[severity] : map.good;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        padding: '6px 12px',
        borderRadius: 999,
        border: `1px solid ${s.border}`,
        background: s.bg,
        color: s.text,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
};

const MetricCard = ({
  icon,
  title,
  metric,
  live,
}: {
  icon: React.ReactNode;
  title: string;
  metric: { label: string; value: number; unit?: string; color?: 'good' | 'warn' | 'danger' };
  live?: boolean;
}) => {
  const colors = {
    good: { bar: 'rgba(76,175,80,0.95)', glow: 'rgba(76,175,80,0.20)' },
    warn: { bar: 'rgba(255,179,71,0.95)', glow: 'rgba(255,179,71,0.25)' },
    danger: { bar: 'rgba(255,95,87,0.95)', glow: 'rgba(255,95,87,0.25)' },
  } as const;

  const c = metric.color ? colors[metric.color] : colors.good;
  const normalized = clamp(metric.value, 0, 100);

  return (

    <motion.div
      className="rc-card rc-card-strong"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -4 }}
      role="group"
      aria-label={title}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <div className="rc-card-title">
            <span className="rc-icon">{icon}</span>
            {title}
          </div>
          <div className="rc-card-value" aria-live={live ? 'polite' : 'off'}>
            {metric.value.toFixed(metric.unit === '%' ? 1 : 0)}
            {metric.unit ? <span className="rc-card-unit">{metric.unit}</span> : null}
          </div>
        </div>
        {live ? (
          <div className="rc-live-dot" aria-label="Live updating">
            <span className="rc-live-dot-inner" />
          </div>
        ) : null}
      </div>

      <div style={{ marginTop: 14 }}>
        <div className="rc-bar-track" aria-hidden>
          <div
            className="rc-bar-fill"
            style={{ width: `${normalized}%`, background: c.bar, boxShadow: `0 0 22px ${c.glow}` }}
          />
        </div>
      </div>

      <div className="rc-card-subtitle">{metric.label}</div>
    </motion.div>
  );
};

const ProgressAccuracy = ({ value }: { value: number }) => {
  const pct = clamp(value, 0, 100);
  const color = pct > 98 ? 'rgba(255,215,0,0.95)' : pct > 96.5 ? 'rgba(255,179,71,0.95)' : 'rgba(255,95,87,0.95)';
  const glow = pct > 98 ? 'rgba(255,215,0,0.25)' : pct > 96.5 ? 'rgba(255,179,71,0.30)' : 'rgba(255,95,87,0.30)';

  return (
    <div className="rc-card rc-card-strong" role="group" aria-label="Detection Accuracy">
      <div className="rc-card-title">
        <span className="rc-icon"><Eye size={16} /></span>
        Detection Accuracy
      </div>
      <div className="rc-accuracy-wrap">
        <div className="rc-accuracy-value" aria-live="polite">
          {pct.toFixed(2)}<span className="rc-card-unit">%</span>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: 2, textTransform: 'uppercase' }}>
          Confidence-verified classifications
        </div>
      </div>

      <div className="rc-ring" aria-hidden>
        <div className="rc-ring-inner" style={{ background: `conic-gradient(${color} 0 ${pct}%, rgba(255,215,0,0.08) ${pct}% 100%)` }} />
        <div className="rc-ring-center">LIVE</div>
      </div>

      <div className="rc-card-subtitle" style={{ marginTop: 12 }}>
        Updated telemetry every ~0.9s
      </div>

      <div className="rc-bar-track" style={{ marginTop: 16 }} aria-hidden>
        <div className="rc-bar-fill" style={{ width: `${pct}%`, background: color, boxShadow: `0 0 28px ${glow}` }} />
      </div>
    </div>
  );
};

const BarList = ({ items }: { items: { label: string; value: number }[] }) => {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {items.map((it) => {
        const w = max > 0 ? (it.value / max) * 100 : 0;
        return (
          <div key={it.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
              <div className="rc-card-subtitle" style={{ margin: 0 }}>
                {it.label.toUpperCase()}
              </div>
              <div className="rc-card-subtitle" style={{ margin: 0, color: 'var(--text-secondary)' }}>
                {it.value.toFixed(1)}%
              </div>
            </div>
            <div className="rc-bar-track" aria-hidden>
              <div className="rc-bar-fill" style={{ width: `${w}%` }} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

const LiveDashboard = () => {
  const { metrics } = useLiveTelemetry();

  // Vehicle class bars derived from live tick-like variation, but we keep it stable inside UI.
  const vehicleClassBars = useMemo(
    () => [
      { label: 'Car', value: 62 + Math.sin(1) * 0 },
      { label: 'Truck', value: 18 + Math.cos(1) * 0 },
      { label: 'Motorbike', value: 14 + Math.sin(2) * 0 },
      { label: 'Bus', value: 6 + Math.cos(2) * 0 },
    ],
    []
  );

  // Instead of recomputing separately, we’ll use metric confidence/incidents to subtly alter bar widths.
  const adjustedVehicleBars = useMemo(() => {
    const confidence = metrics.ai[1]?.value ?? 96;
    const incident = metrics.vehicle[2]?.value ?? 2;

    const car = clamp(vehicleClassBars[0].value + (confidence - 96) * 0.15 - incident * 0.2, 40, 80);
    const truck = clamp(vehicleClassBars[1].value + Math.sin(confidence / 10) * 1.3 - incident * 0.1, 8, 30);
    const bike = clamp(vehicleClassBars[2].value + Math.cos(confidence / 12) * 1.2, 6, 25);
    const bus = clamp(vehicleClassBars[3].value + incident * 0.2, 2, 15);


    // Normalize to 100
    const sum = car + truck + bike + bus;
    return [
      { label: 'Car', value: (car / sum) * 100 },
      { label: 'Truck', value: (truck / sum) * 100 },
      { label: 'Motorbike', value: (bike / sum) * 100 },
      { label: 'Bus', value: (bus / sum) * 100 },
    ];
  }, [metrics.ai, metrics.vehicle, vehicleClassBars]);

  return (
    <section id="live-dashboard" className="section rc-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="rc-section-head">
            <div className="section-label">X · LIVE AI MONITORING</div>
            <h2 className="section-title" style={{ marginBottom: 22 }}>
              Control-room <span>Dashboard</span>
            </h2>
            <p className="rc-section-lead">
              Real-time vehicle detection telemetry with system health and AI processing metrics — styled like an operational surveillance console.
            </p>
          </div>
        </motion.div>

        <div className="rc-grid-3">
          <MetricCard icon={<Truck size={16} />} title="Vehicle Detection" metric={metrics.vehicle[0]} live />
          <MetricCard icon={<Shield size={16} />} title="System Health" metric={metrics.system[1]} live />
          <MetricCard icon={<Brain size={16} />} title="AI Processing" metric={metrics.ai[0]} live />
        </div>

        <div className="rc-grid-2" style={{ marginTop: 18 }}>
          <ProgressAccuracy value={metrics.detectionAccuracy.value} />

          <div className="rc-card rc-card-strong" role="group" aria-label="Monitoring Statistics">
            <div className="rc-card-title">
              <span className="rc-icon"><Activity size={16} /></span>
              Monitoring Statistics
            </div>

            <div className="rc-stats-grid">
              {metrics.stats.map((s, idx) => (
                <div key={idx} className="rc-stat-item">
                  <div className="rc-stat-value">
                    {s.severity === 'danger' ? <span className="rc-sev-pill rc-sev-danger">•</span> : null}
                    {s.severity === 'warn' ? <span className="rc-sev-pill rc-sev-warn">•</span> : null}
                    {(!s.severity || s.severity === 'good') ? <span className="rc-sev-pill rc-sev-good">•</span> : null}
                    {s.value}
                  </div>
                  <div className="rc-stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <SeverityPill severity={metrics.vehicle[2].color}>
                <AlertTriangle size={14} /> Incident Mode
              </SeverityPill>
              <SeverityPill severity="good">
                <Gauge size={14} /> Throughput Stable
              </SeverityPill>
              <SeverityPill severity={metrics.ai[1].color}>
                <Thermometer size={14} /> Latency Monitor
              </SeverityPill>
            </div>
          </div>
        </div>

        <div className="rc-grid-2" style={{ marginTop: 18 }}>
          <div className="rc-card rc-card-strong" role="group" aria-label="Vehicle Analytics">
            <div className="rc-card-title">
              <span className="rc-icon"><Truck size={16} /></span>
              Vehicle Analytics (Class Distribution)
            </div>
            <div style={{ marginTop: 8 }}>
              <BarList items={adjustedVehicleBars} />
            </div>
            <div className="rc-card-subtitle" style={{ marginTop: 16 }}>
              Live class weighting derived from confidence + incident pressure.
            </div>
          </div>

          <div className="rc-card rc-card-strong" role="group" aria-label="AI Processing Metrics">
            <div className="rc-card-title">
              <span className="rc-icon"><Brain size={16} /></span>
              AI Processing Metrics
            </div>
            <div className="rc-mini-metrics">
              {metrics.system.slice(0, 2).map((m, i) => (
                <div key={i} className="rc-mini-metric">
                  <div className="rc-mini-label">{m.label}</div>
                  <div className="rc-mini-value">
                    {m.value.toFixed(m.unit === '%' ? 1 : 0)}<span className="rc-card-unit">{m.unit}</span>
                  </div>
                </div>
              ))}

              <div className="rc-divider" />

              {metrics.ai.map((m, i) => (
                <div key={i} className="rc-mini-metric">
                  <div className="rc-mini-label">{m.label}</div>
                  <div className="rc-mini-value">
                    {m.value.toFixed(m.unit === '%' ? 1 : 0)}<span className="rc-card-unit">{m.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <SeverityPill severity={metrics.system[0].color}>
                <Thermometer size={14} /> Sensor Temp
              </SeverityPill>
              <SeverityPill severity="good">
                <Shield size={14} /> Secure Execution
              </SeverityPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDashboard;

