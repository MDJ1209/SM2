'use client';

import { useState, useEffect } from 'react';
import styles from './BudgetLock.module.css';

interface BudgetLockProps {
  value: string;
  onChange: (value: string) => void;
}

export default function BudgetLock({ value, onChange }: BudgetLockProps) {
  // 5 digits state, initialized to 50000 (₹50,000)
  const [digits, setDigits] = useState<number[]>([5, 0, 0, 0, 0]);

  // Sync state changes back to parent form (always active, INR only)
  useEffect(() => {
    const numericValue = digits.join('');
    const intValue = parseInt(numericValue, 10);
    const symbol = '₹';
    
    // Format number with Indian numbering system (en-IN)
    const formattedNumber = intValue.toLocaleString('en-IN');
    onChange(`${symbol} ${formattedNumber}`);
  }, [digits, onChange]);

  const handleRadioChange = (dialIndex: number, digitValue: number) => {
    const newDigits = [...digits];
    newDigits[dialIndex] = digitValue;
    setDigits(newDigits);
  };

  // Convert external value input to lock digits if it matches format
  useEffect(() => {
    if (!value) return;

    const inrRegex = /^₹\s*([\d,]+)$/;
    const match = value.match(inrRegex);
    if (match) {
      const cleanNum = match[1].replace(/,/g, '');
      const paddedNum = cleanNum.padStart(5, '0').slice(-5);
      const parsedDigits = paddedNum.split('').map(d => parseInt(d, 10));
      
      // Only update if digits are actually different to avoid infinite loops
      if (parsedDigits.join('') !== digits.join('')) {
        setDigits(parsedDigits);
      }
    }
  }, [value, digits]);

  const displayValue = () => {
    const numericValue = digits.join('');
    const intValue = parseInt(numericValue, 10);
    return `₹ ${intValue.toLocaleString('en-IN')}`;
  };

  return (
    <div className="flex flex-col items-center space-y-6 select-none bg-[#0a0a0a]/30 border border-white/5 rounded-3xl p-6 backdrop-blur-sm shadow-2xl">
      <div className="flex items-center justify-between w-full max-w-[280px] px-1">
        <span className="text-[9px] uppercase tracking-[0.25em] text-white/50 font-bold">
          Estimated Budget (INR Only)
        </span>
        <span className="text-[8px] font-bold uppercase tracking-widest bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] px-2.5 py-1 rounded-full">
          Active
        </span>
      </div>

      <div className={styles.combinationLock}>
        {/* Render 5 Dials */}
        {[0, 1, 2, 3, 4].map((dialIndex) => (
          <div key={dialIndex} className={styles.dial}>
            <div className={styles.nonagon}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
                <div key={digit} className={`${styles.face} ${styles[`face-${digit}`]}`}>
                  <input
                    type="radio"
                    name={`wheel-${dialIndex}`}
                    className={`${styles.radio} ${styles[`radio-${digit}`]}`}
                    checked={digits[dialIndex] === digit}
                    onChange={() => handleRadioChange(dialIndex, digit)}
                  />
                  <span>{digit}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        {/* Status Light (Always Active) */}
        <div className={`${styles.light} ${styles.lightActive}`} />
        
        {/* Decorative Side Arrows */}
        <div className={`${styles.arrow} ${styles.left}`} />
        <div className={`${styles.arrow} ${styles.right}`} />
      </div>

      <div className="text-center space-y-1 w-full">
        <div className="text-white/40 text-[9px] uppercase tracking-widest font-semibold">
          Selected Budget
        </div>
        <div className="text-2xl md:text-3xl font-serif text-[#d4af37] font-semibold tracking-wide">
          {displayValue()}
        </div>
      </div>
    </div>
  );
}
