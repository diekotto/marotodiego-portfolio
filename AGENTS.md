If you do whatever command with next.js and get networking errors, remember that you are running in a controlled environment without internet and nextjs tries telemetry by default.
You can run `npx next telemetry disable` to opt out telemetry.

To have a clean PR after you did your task, you should run and fix (if errors):

- run lint
- run build
- npm run fmt (prettier write command)
