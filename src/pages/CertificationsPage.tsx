import React, { useState } from 'react';
import { Award, Search, CheckCircle2, XCircle, Calendar, BookOpen, User, ShieldCheck, Loader2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface VerifiedCertificate {
  certificateCode: string;
  fullName: string;
  courseName: string;
  batchName?: string;
  enrollDate: string;
  issueDate: string;
  status: string;
}

const API_BASE = (import.meta as any).env?.VITE_API_URL || 'https://sa-be.onrender.com/api';

export default function CertificationsPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const [certCode, setCertCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifiedCertificate | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanCode = certCode.trim();
    if (!cleanCode) return;

    setLoading(true);
    setErrorMsg(null);
    setResult(null);
    setHasSearched(true);

    try {
      const response = await fetch(`${API_BASE}/certificates/public/verify/${encodeURIComponent(cleanCode)}`);
      const data = await response.json();

      if (response.ok && data.success && data.valid && data.certificate) {
        setResult(data.certificate);
      } else {
        setErrorMsg(data.message || 'No valid record found. Invalid or wrong Certificate ID entered.');
      }
    } catch (err) {
      console.error('Verification error:', err);
      setErrorMsg('No valid record found. Invalid or wrong Certificate ID entered.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/40 via-white to-gray-50/50 pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Top Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>Official Credential Verification</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Verify Sereniche Academy Certificate
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Enter your official Certificate ID to verify credentials, course completion, and issuance records.
          </p>
        </div>

        {/* Verification Search Box */}
        <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-purple-100/80 mb-8 backdrop-blur-xl">
          <form onSubmit={handleVerify} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter Certificate ID (e.g. SA/2026/BAT01/0001)"
                value={certCode}
                onChange={(e) => setCertCode(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-200 text-gray-900 font-mono text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading || !certCode.trim()}
              className="px-8 py-4 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] active:scale-95 text-white font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Checking...</span>
                </>
              ) : (
                <>
                  <span>Check Certificate</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          <div className="mt-3 text-xs text-gray-400 text-center">
            The Certificate ID can be found at the official certificate or contact administrator.
          </div>
        </div>

        {/* Verification Result Area */}
        {loading && (
          <div className="text-center py-12">
            <Loader2 className="w-10 h-10 text-purple-600 animate-spin mx-auto mb-3" />
            <p className="text-sm font-semibold text-gray-500">Checking official academy records...</p>
          </div>
        )}

        {/* Verified Result Card */}
        {result && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-100 overflow-hidden relative"
          >
            {/* Top Verified Banner */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-100 flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      Verified & Valid
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900 mt-0.5">
                    Official Certificate
                  </h3>
                </div>
              </div>

              <div className="text-right">
                <div className="text-xs text-gray-400 font-semibold uppercase">Certificate ID</div>
                <code className="text-base font-mono font-bold text-gray-800 bg-gray-100 px-3 py-1 rounded-lg inline-block mt-0.5">
                  {result.certificateCode}
                </code>
              </div>
            </div>

            {/* Minimum Textual Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {/* Student Name */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Student Name
                  </div>
                  <div className="text-lg font-bold text-gray-900 mt-0.5">
                    {result.fullName}
                  </div>
                </div>
              </div>

              {/* Course Name */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Course Name
                  </div>
                  <div className="text-lg font-bold text-gray-900 mt-0.5">
                    {result.courseName}
                  </div>
                  {result.batchName && (
                    <div className="text-xs text-purple-600 font-semibold mt-0.5">
                      Batch: {result.batchName}
                    </div>
                  )}
                </div>
              </div>

              {/* Enroll Date (Batch start date) */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Enrollment Date
                  </div>
                  <div className="text-base font-bold text-gray-900 mt-0.5">
                    {result.enrollDate}
                  </div>
                </div>
              </div>

              {/* Certificate Issue Date */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Certificate Issue Date
                  </div>
                  <div className="text-base font-bold text-gray-900 mt-0.5">
                    {result.issueDate}
                  </div>
                </div>
              </div>
            </div>

            {/* Authenticity footer notice */}
            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                <ShieldCheck className="w-4 h-4" /> Authenticated by Sereniche Academy Registry
              </span>
              <span>Status: <strong className="text-emerald-700">Valid</strong></span>
            </div>
          </motion.div>
        )}

        {/* Invalid or Wrong ID Result Card */}
        {errorMsg && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-red-100 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
              <XCircle className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-extrabold text-gray-900 mb-2">
              No Valid Record Found
            </h3>

            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Invalid or wrong Certificate ID entered. This certificate either does not exist, or has not been marked with valid status by academy administrators.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-gray-400 bg-gray-50 px-4 py-2 rounded-xl">
              <span>Please double-check the ID printed on the top-right corner of your certificate.</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

