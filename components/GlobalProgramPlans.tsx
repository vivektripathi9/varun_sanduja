"use client";

import React, { useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { CheckCircle2, Star } from 'lucide-react';
import './GlobalProgramPlans.css';

export function GlobalProgramPlans() {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'global-group' | 'global-premium'>('global-group');
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    email: "",
    mobile: "",
    city: "",
    country: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, planType: selectedPlan, includeKit: false })
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error || 'Something went wrong');
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.amount,
        currency: data.currency,
        name: 'STEMORBIT',
        description: `${selectedPlan === 'global-premium' ? 'Premium 1:1' : 'Global Group'} Mentorship`,
        order_id: data.id,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        handler: async function (response: any) {
          try {
             const verifyRes = await fetch('/api/enroll/verify', {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({
                 razorpay_order_id: response.razorpay_order_id,
                 razorpay_payment_id: response.razorpay_payment_id,
                 razorpay_signature: response.razorpay_signature,
               })
             });
             if (verifyRes.ok) {
               setSuccess(true);
             } else {
               alert("Payment verification failed. Please contact support.");
             }
          } catch (err) {
             console.error(err);
             alert("Verification error.");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile
        },
        theme: {
          color: selectedPlan === 'global-premium' ? '#4338ca' : '#2fa742'
        }
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rzp = new (window as any).Razorpay(options);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      rzp.on('payment.failed', function (response: any) {
        alert('Payment Failed: ' + response.error.description);
      });
      rzp.open();
    } catch (err) {
      console.error(err);
      alert('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const total = selectedPlan === 'global-premium' ? 249 : 149;

  const groupLearningFeatures = [
    "8 Live Group Sessions (Online)",
    "Small Batch Learning",
    "STEM Challenges",
    "Community Access",
    "Monthly Progress Reports"
  ];

  const premiumMentorshipFeatures = [
    "One-on-One Live Sessions (Online)",
    "Personalized Learning Path",
    "Advanced Projects",
    "Parent Review Session",
    "Priority Support"
  ];


  return (
    <section className="gpp-section">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="gpp-container">
        
        {/* PROGRAM PLANS */}
        <h2 className="gpp-title">PROGRAM PLANS</h2>
        <div className="gpp-plans-grid">
          
          {/* Group Learning Card */}
          <div className="gpp-plan-card">
            <div className="gpp-plan-content">
              <h3 className="gpp-plan-name">GLOBAL GROUP LEARNING</h3>
              <div className="gpp-plan-price">
                <span className="gpp-price-green">USD 149</span> /Month
              </div>
              <ul className="gpp-plan-list">
                {groupLearningFeatures.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} fill="#2fa742" color="white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="gpp-enroll-btn gpp-btn-green"
                onClick={() => { setSelectedPlan('global-group'); setShowForm(true); }}
              >
                ENROLL NOW
              </button>
            </div>
            <div className="gpp-plan-image-wrapper">
              <Image 
                src="/GlobalGroupLearnig.png" 
                alt="Global Group Learning" 
                fill 
                className="gpp-plan-image"
              />
            </div>
          </div>

          {/* Premium Mentorship Card */}
          <div className="gpp-plan-card">
            <div className="gpp-plan-content">
              <h3 className="gpp-plan-name">
                PREMIUM <span style={{ color: '#4338ca' }}>1:1</span> MENTORSHIP
              </h3>
              <div className="gpp-plan-price">
                <span className="gpp-price-purple">USD 249</span> /Month
              </div>
              <ul className="gpp-plan-list">
                {premiumMentorshipFeatures.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={20} fill="#2fa742" color="white" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button 
                className="gpp-enroll-btn gpp-btn-purple"
                onClick={() => { setSelectedPlan('global-premium'); setShowForm(true); }}
              >
                ENROLL NOW
              </button>
            </div>
            <div className="gpp-plan-image-wrapper">
              <Image 
                src="/premium1-1.png" 
                alt="Premium 1:1 Mentorship" 
                fill 
                className="gpp-plan-image"
              />
            </div>
          </div>
          
        </div>

      </div>

      {/* POPUP MODAL */}
      {(showForm || success) && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, padding: '1rem' }}>
          {success ? (
            <div style={{ background: '#010a1f', padding: '3rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '500px', width: '100%', textAlign: 'center', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
               <button onClick={() => {setShowForm(false); setSuccess(false);}} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'transparent', color: '#fff', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
               <h3 style={{ fontSize: '2rem', color: '#4ade80', marginBottom: '1rem' }}>🎉 Enrollment Successful!</h3>
               <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem' }}>Welcome to STEMORBIT. We have received your enrollment and will contact you shortly with the next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: '#010a1f', padding: '2.5rem', borderRadius: '1rem', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', maxHeight: '90vh', overflowY: 'auto' }}>
               <button type="button" onClick={() => setShowForm(false)} style={{ position: 'absolute', top: '1rem', right: '1.5rem', background: 'transparent', color: 'rgba(255,255,255,0.5)', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>&times;</button>
               <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem', textAlign: 'center' }}>Student Enrollment</h3>
               
               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name of Student</label>
                 <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Grade of Student</label>
                 <input required type="text" value={formData.grade} onChange={e => setFormData({...formData, grade: e.target.value})} placeholder="e.g. 5th Grade" style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email (Parent or Student)</label>
                 <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ marginBottom: '1rem' }}>
                 <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Mobile (Parent or Student)</label>
                 <input required type="tel" value={formData.mobile} onChange={e => setFormData({...formData, mobile: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
               </div>

               <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                 <div style={{ flex: 1 }}>
                   <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>City</label>
                   <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
                 </div>
                 <div style={{ flex: 1 }}>
                   <label style={{ display: 'block', color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Country</label>
                   <input required type="text" value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', outline: 'none' }} />
                 </div>
               </div>

               <div style={{ marginBottom: '1.5rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '0.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                   <span>Course Fee</span>
                   <span>USD {total}</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                   <span>GST</span>
                   <span>USD 0</span>
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1.1rem', fontWeight: 'bold' }}>
                   <span>Total Payable</span>
                   <span style={{ color: selectedPlan === 'global-premium' ? '#818cf8' : '#4ade80' }}>USD {total}</span>
                 </div>
               </div>

               <div style={{ display: 'flex', gap: '1rem' }}>
                 <button type="button" onClick={() => setShowForm(false)} style={{ flex: 1, padding: '0.75rem', borderRadius: '0.5rem', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Cancel</button>
                 <button type="submit" disabled={loading} style={{ flex: 2, padding: '0.75rem', borderRadius: '0.5rem', background: selectedPlan === 'global-premium' ? '#4338ca' : '#2fa742', color: '#fff', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontWeight: 'bold', opacity: loading ? 0.7 : 1 }}>
                   {loading ? 'Processing...' : `Pay USD ${total}`}
                 </button>
               </div>
            </form>
          )}
        </div>
      )}

    </section>
  );
}
