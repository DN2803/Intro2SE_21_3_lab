USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspAddEmployee]    Script Date: 12/27/2023 3:07:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
ALTER PROCEDURE [dbo].[uspAddEmployee]
    @maNV CHAR(10), --cái này nó truyền cho BS hoặc DS, sau nó tự động cập nhật lại mã nhờ vô trigger đã cài đặt....
	@degree NVARCHAR(30),
	@email NVARCHAR(30),
	@name VARCHAR(50),
	@phone CHAR(10),
	@wage MONEY,
    @ResponseMessage NVARCHAR(100) OUTPUT -- Đầu ra
AS
BEGIN
	BEGIN TRY
		DECLARE @lastestEmployee NVARCHAR(10);
		DECLARE @identifyCode NVARCHAR(10);
		DECLARE @username VARCHAR(20);
		DECLARE @currentDate DATE;
		DECLARE @temp NVARCHAR(50); --biến này để tạm thui
		IF @maNV ='BS'
		BEGIN
			DECLARE @nextId INT;
			SELECT @nextId = MAX(ID) FROM BACSI
			SET @maNV = 'BS' + RIGHT('000' + CAST(@nextId AS VARCHAR(3)), 3);   --ghép tiền tố BS với 3 con số cuối lấy từ cột ID **
			INSERT INTO BACSI(MABACSI,HOCHAM,EMAIL_BS,HOTEN_BS,SDT_BS,LUONG)	--thêm vào bảng
			VALUES (@maNV, @degree, @email, @name, @phone, @wage);

			SET @lastestEmployee = dbo.GetLatestDoctorCode(); --lấy ra nhân viên vừa mới thêm
			SET @identifyCode = dbo.GetNumericPartFromCode(@lastestEmployee);  --lấy phần đuôi số định danh để tạo username, nghĩa là lấy phần ** từ bước trên đó
			
			SET @username = 'doctor' + @identifyCode; --ghép phần đuôi trên vô này để tạo username
			SET @currentDate = GETDATE();				--lấy ngày hiện tại
			EXEC dbo.uspAddUser @USERNAME = @username,		--chạy procedure tạo tài khoản
                    @PASSWORD = '123456@',
                    @NGAYTAO = @currentDate,
                    @SIGNAL = N'Bác sĩ',
                    @responseMessage = @temp OUTPUT;
			UPDATE BACSI	
			SET USERNAME = @username -- Cập nhật username vừa tạo vô bảng BACSI
			WHERE MABACSI = @lastestEmployee;

		END
		ELSE
		BEGIN
			--phần này làm tương tự như bác sĩ, tự xem
			SELECT @nextId = MAX(ID) FROM DUOCSI
			SET @maNV = 'DS' + RIGHT('000' + CAST(@nextId AS VARCHAR(3)), 3);
			INSERT INTO DUOCSI(MADUOCSI,HOCHAM,EMAIL_DS,HOTEN_DS,SDT_DS,LUONG)
			VALUES (@maNV, @degree, @email, @name, @phone, @wage);
			SET @lastestEmployee = dbo.GetLatestPharCode(); --lấy ra nhân viên vừa mới thêm
			SET @identifyCode = dbo.GetNumericPartFromCode(@lastestEmployee);  --lấy phần đuôi số định danh để tạo username
			SET @username = 'pharmacist' + @identifyCode;
			SET @currentDate = GETDATE();
			EXEC dbo.uspAddUser @USERNAME = @username,
                    @PASSWORD = '123456@',
                    @NGAYTAO = @currentDate,
                    @SIGNAL = N'Dược sĩ',
                    @responseMessage = @temp OUTPUT;
			UPDATE DUOCSI
			SET USERNAME = @username -- Cập nhật username vừa tạo vô bảng DUOCSI
			WHERE MADUOCSI = @lastestEmployee;
		END
		SET @ResponseMessage = N'Success';
	END TRY
	BEGIN CATCH
		SET @ResponseMessage = ERROR_MESSAGE();
	END CATCH
END;
