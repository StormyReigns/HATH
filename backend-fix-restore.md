# Backend: two-line fix so restore works

**File:** `~/HATH-backend/Claude 101.gs` — then run `pushgs "fix projects backup restore auth"`

Saving works without this. **Restoring does not** — it currently fails for
everyone, and has since session-based login was added. Two small edits.

---

## Edit 1 — pass the request through, not just the email

Find (around line 149, in `doGet`):

```js
    if (action === 'getProjectsBackup' && params.user) {
      return jsonResponse(getProjectsBackupForUser_(params.user));
    }
```

Change to:

```js
    if (action === 'getProjectsBackup' && params.user) {
      return jsonResponse(getProjectsBackupForUser_(params));
    }
```

## Edit 2 — check the caller's real session

Find (around line 2006):

```js
function getProjectsBackupForUser_(userEmail) {
  var auth = requireUser({ user: userEmail });
```

Change to:

```js
function getProjectsBackupForUser_(params) {
  var auth = requireUser(params);
```

---

## Why

`requireUser()` validates the signed **session token**, not the email. The old
code built a throwaway object containing only the email, so there was never a
session to check and the call always came back "Unauthorized: no session".

Nothing else in the function changes — `auth.user` still supplies the email it
uses to look up rows.

## Checking it worked

After `pushgs`, open Projects. If the header says **"Backed up just now"** and
no error, saving is fine. To prove restore: open the app in a private window,
sign in, and Projects should fill in from the backup instead of showing the
demo trackers.
