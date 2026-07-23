import React from 'react'

const Loading = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'var(--color-paper)' }}
    >
      <div className="relative" role="status" aria-label="Loading">
        <div
          className="w-16 h-16 rounded-full animate-spin"
          style={{
            border: '2px solid var(--color-rule)',
            borderTopColor: 'var(--color-accent)',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-xs"
            style={{
              fontFamily: 'var(--font-outlier)',
              color: 'var(--color-muted)',
            }}
          >
            ZLS
          </span>
        </div>
      </div>
    </div>
  )
}

export default Loading