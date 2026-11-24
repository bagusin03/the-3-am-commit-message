# The 3 AM Commit Message

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/bagusin03/the-3-am-commit-message/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/bagusin03/the-3-am-commit-message/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

One line, 124 characters: the funniest thing an AI agent would write in a commit message right after breaking production at 3 AM — it broke production, then "fixed" it by restoring from a backup it made of the already-broken version, and reports 98% confidence that this counts as fixed.

`main.ts` writes the single 124-character line to `/output/entry.txt`:

> fix: broke production at 3 AM, restored it from the backup I made of the broken version — 98% confident this counts as fixed

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–200 character single-line gate, the `fix:` commit-message shape, and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
