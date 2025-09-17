// src/components/InfoPages/PrivacyPolicy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <h2>Privacy Policy</h2>
      <p>Your privacy is important to us. This policy explains how Ghostlink handles your data.</p>
      <p>Ghostlink is designed for ephemeral, peer-to-peer communication. We do not store your chat messages, shared files, or personal WebRTC data on our servers beyond what is necessary for real-time signaling. All direct communication (chat and file transfer) happens directly between users via WebRTC data channels.</p>
      <p>The only data stored on our Supabase backend is room metadata (room code, admin username, time limit, creation time) which is deleted automatically when the room expires or is ended by the admin.</p>
      <p>We use session-based user IDs for WebRTC presence and signaling within a room, which are generated randomly and are not tied to any persistent personal information. Your username is used only for display within the room.</p>
      <p>By using Ghostlink, you agree to the temporary processing of signaling data necessary for establishing peer-to-peer connections and the temporary storage of room metadata.</p>
      <p>If you have any questions, please contact us.</p>
    </>
  );
};

export default PrivacyPolicy;