UPDATE "RevaUser"
SET role = 'SUPERADMIN'
WHERE email IN ('rojitech9@gmail.com', 'abowabaolamide@gmail.com');


-- -- First, delete all existing records from the Property table
-- TRUNCATE TABLE "Property" RESTART IDENTITY CASCADE;

-- -- Insert the sample properties
-- INSERT INTO "Property" (
--   id, reference, "references", title, description, 
--   "paymentLink", "statusMessage", error, "userId", 
--   address, lat, lng, lga, "parcelId", "totalCost", 
--   "documentsUrls", comments, "createdAt", "updatedAt", 
--   deleted, status, "paymentStatus"
-- )
-- VALUES
--   (
--     'e9dcf776-71bb-4b51-92cf-53bb42897469', 
--     'REVA_0d884bd30', 
--     NULL, 
--     'Testing the Luxury', 
--     NULL, 
--     NULL, 
--     'Payment completed successfully', 
--     NULL, 
--     '2f9546fc-ff57-41a8-b549-f27fba1a0527', 
--     '30 Martins St, Idi Oro, Lagos 102215, Lagos, Nigeria', 
--     6.523544586322884, 
--     3.357055682373042, 
--     'Mushin 102215, Lagos, Nigeria', 
--     '-', 
--     40000, 
--     ARRAY[]::text[], 
--     '', 
--     '2025-05-13 12:36:30.888', 
--     '2025-05-13 12:37:02.826', 
--     false, 
--     'Completed', 
--     'Paid'
--   ),
--   (
--     '61d510a6-7304-414a-a299-3dcc3b4087ce', 
--     'REVA_5d585bbd4', 
--     NULL, 
--     'Surv Tomi''s office', 
--     NULL, 
--     NULL, 
--     'Payment completed successfully', 
--     NULL, 
--     '7efa21f6-2f34-4d0f-8eda-97e380f471ef', 
--     '133 obafemi', 
--     6.6120526, 
--     3.3535529, 
--     'IKEJA', 
--     '771443324', 
--     50000, 
--     ARRAY['https://reva-store.s3.eu-north-1.amazonaws.com/uploads/1747339366626-eefou8ij434-tix-receipt-WS4PSETV1G.pdf'], 
--     '', 
--     '2025-05-15 20:02:47.076', 
--     '2025-05-15 20:23:12.316', 
--     false, 
--     'Processing', 
--     'Paid'
--   ),
--   (
--     'f0543e69-8a62-4d0a-bb40-00809f10518a', 
--     'REVA_c7beb78e5', 
--     NULL, 
--     'Surv Tomi''s House', 
--     NULL, 
--     NULL, 
--     'Payment completed successfully', 
--     NULL, 
--     '7efa21f6-2f34-4d0f-8eda-97e380f471ef', 
--     '59 sholanke', 
--     6.527989900000001, 
--     3.3854258, 
--     'SHOMOLU', 
--     '2363184599', 
--     40000, 
--     ARRAY['https://reva-store.s3.eu-north-1.amazonaws.com/uploads/1747340730272-d6i8zy5vror-tix-receipt-WS4PSETV1G.pdf'], 
--     'Testing Testing', 
--     '2025-05-15 20:25:30.56', 
--     '2025-05-15 20:25:53.871', 
--     false, 
--     'Processing', 
--     'Paid'
--   ),
--   (
--     '12199e86-718d-42bc-ae69-6954f323ee9c', 
--     'REVA_5a2e24dd8', 
--     NULL, 
--     '', 
--     NULL, 
--     NULL, 
--     'Payment completed successfully', 
--     NULL, 
--     '7efa21f6-2f34-4d0f-8eda-97e380f471ef', 
--     '58 abiodun', 
--     6.535017799999999, 
--     3.3806507, 
--     'SHOMOLU', 
--     '2157263264', 
--     40000, 
--     ARRAY[]::text[], 
--     '', 
--     '2025-05-13 19:04:55.311', 
--     '2025-05-15 20:41:24.229', 
--     false, 
--     'Processing', 
--     'Paid'
--   ),
--   (
--     '27882420-bb84-4348-8f97-7562530a646b', 
--     'REVA_1e626ba58', 
--     NULL, 
--     'Marriott Hotel', 
--     NULL, 
--     NULL, 
--     'Payment completed successfully', 
--     NULL, 
--     '7efa21f6-2f34-4d0f-8eda-97e380f471ef', 
--     'marriott hotel ikeja', 
--     6.584589900000001, 
--     3.3494207, 
--     'IKEJA', 
--     '2934125986', 
--     50000, 
--     ARRAY['https://reva-store.s3.eu-north-1.amazonaws.com/uploads/1747347852740-vu3w7zii1m-ALEX.pdf'], 
--     'Test01', 
--     '2025-05-15 22:24:13.06', 
--     '2025-05-15 22:25:06.876', 
--     false, 
--     'Processing', 
--     'Paid'
--   ),
--   (
--     'f84603f3-0482-43a8-ad85-8195cdf577e7', 
--     'REVA_7f63149f5', 
--     NULL, 
--     '', 
--     NULL, 
--     NULL, 
--     'Payment completed successfully', 
--     NULL, 
--     '7efa21f6-2f34-4d0f-8eda-97e380f471ef', 
--     '58 kudi', 
--     6.5996516, 
--     3.3658799, 
--     'IKEJA', 
--     '2673784313', 
--     50000, 
--     ARRAY[]::text[], 
--     '', 
--     '2025-05-14 10:13:28.191', 
--     '2025-05-15 22:31:28.149', 
--     false, 
--     'Processing', 
--     'Paid'
--   ),
--   (
--     'fbd6d8a7-6131-4382-8392-d04d395ccc37', 
--     'REVA_0f841e018', 
--     NULL, 
--     'Another TEst', 
--     NULL, 
--     NULL, 
--     'Request is being processed', 
--     NULL, 
--     '2f9546fc-ff57-41a8-b549-f27fba1a0527', 
--     'G9HC+5MG, Isaac John St, Yaba, Lagos 006424, Lagos, Nigeria', 
--     6.528237351791129, 
--     3.371432322692867, 
--     'Shomolu 102216, Lagos, Nigeria', 
--     '3999140759', 
--     40000, 
--     ARRAY[]::text[], 
--     '', 
--     '2025-05-16 05:25:45.41', 
--     '2025-05-16 05:25:45.41', 
--     false, 
--     'Processing', 
--     'Unpaid'
--   ),
--   (
--     'b48a445d-80b4-4ce4-89e6-d6181ee8b581', 
--     'REVA_635e125b3', 
--     NULL, 
--     'Olamide', 
--     NULL, 
--     NULL, 
--     'Payment completed successfully', 
--     NULL, 
--     '7efa21f6-2f34-4d0f-8eda-97e380f471ef', 
--     '58 kudi', 
--     6.5996516, 
--     3.3658799, 
--     'IKEJA', 
--     '2673784313', 
--     50000, 
--     ARRAY[]::text[], 
--     '', 
--     '2025-05-16 21:50:39.87', 
--     '2025-05-16 21:50:53.954', 
--     false, 
--     'Processing', 
--     'Paid'
--   ),
--   (
--     '6b904d88-2cfb-4f87-bebd-dd406139d845', 
--     'REVA_9a4c322eb', 
--     NULL, 
--     '', 
--     NULL, 
--     NULL, 
--     'Payment completed successfully', 
--     NULL, 
--     '7efa21f6-2f34-4d0f-8eda-97e380f471ef', 
--     '436 wemco', 
--     6.6281053, 
--     3.3409214, 
--     'IKEJA', 
--     '-', 
--     50000, 
--     ARRAY[]::text[], 
--     '', 
--     '2025-05-17 11:50:05.435', 
--     '2025-05-17 11:50:28.444', 
--     false, 
--     'Processing', 
--     'Paid'
--   ),
--   (
--     '87d3fc2f-4c85-48b9-996d-f6aada8a30d7', 
--     'REVA_a4960cf4e', 
--     NULL, 
--     '', 
--     NULL, 
--     NULL, 
--     'Request is being processed', 
--     NULL, 
--     '7efa21f6-2f34-4d0f-8eda-97e380f471ef', 
--     '58 abiodun', 
--     6.535017799999999, 
--     3.3806507, 
--     'SHOMOLU', 
--     '2157263264', 
--     40000, 
--     ARRAY['https://reva-store.s3.eu-north-1.amazonaws.com/uploads/1747583928004-nitrdpdxwg-BYA_5599_021_2025_LA.pdf'], 
--     '', 
--     '2025-05-18 15:58:48.413', 
--     '2025-05-18 15:58:48.413', 
--     false, 
--     'Processing', 
--     'Unpaid'
--   ),
--   (
--     '3e9407cd-bd7e-4171-bec7-9df89eb5fe3c', 
--     'REVA_86e628c17', 
--     NULL, 
--     '', 
--     NULL, 
--     NULL, 
--     'Payment completed successfully', 
--     NULL, 
--     '35dde240-bec5-4c77-b7a8-137d7e7f944d', 
--     'CGRX+847, Alhaji Yekini Olawale Bakare St, Lekki Penninsula II, Lekki 106104, Lagos, Nigeria', 
--     6.440793093706024, 
--     3.548094678354259, 
--     'ETI-OSA', 
--     '-', 
--     50000, 
--     ARRAY[]::text[], 
--     '', 
--     '2025-05-19 13:29:12.434', 
--     '2025-05-19 13:30:41.906', 
--     false, 
--     'Processing', 
--     'Paid'
--   );

-- -- Verify the insertions
-- SELECT COUNT(*) AS inserted_rows FROM "Property";


-- UPDATE "Property"
-- SET report = jsonb_build_object(
--   'directFileLink',
--   'https://reva-store.s3.eu-north-1.amazonaws.com/uploads/REVA_86e628c17.pdf'
-- )
-- , status = 'Completed'
-- WHERE reference = 'REVA_86e628c17';


-- -- UPDATE "Property"
-- -- SET status = 'Completed'
-- -- WHERE reference = 'REVA_86e628c17';

